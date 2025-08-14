export function CodeExamples() {
  return (
    <div className="space-y-8">
      {/* Basic Agent Example */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-black mb-4">Basic Agent with Tools</h3>
        <pre className="bg-black text-white p-4 rounded-md text-sm overflow-x-auto">
          {`class BasicAgent {
  constructor(tools) {
    this.tools = tools;
  }

  async executeTask(task) {
    // Agent directly selects and uses tools
    if (task.type === 'data_query') {
      return await this.tools.database.query(task.query);
    } else if (task.type === 'send_email') {
      return await this.tools.email.send(task.recipient, task.message);
    } else if (task.type === 'generate_report') {
      const data = await this.tools.database.query(task.dataQuery);
      return await this.tools.reporting.generate(data, task.template);
    }
    
    throw new Error('Unknown task type');
  }
}`}
        </pre>
      </div>

      {/* Orchestrator Agent Example */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-black mb-4">Orchestrator Agent</h3>
        <pre className="bg-black text-white p-4 rounded-md text-sm overflow-x-auto">
          {`class OrchestratorAgent {
  constructor(agents, messageQueue) {
    this.agents = {
      data: agents.dataAgent,
      analysis: agents.analysisAgent,
      communication: agents.communicationAgent,
      reporting: agents.reportingAgent
    };
    this.messageQueue = messageQueue;
    this.taskTracker = new Map();
  }

  async executeComplexTask(task) {
    const taskId = this.generateTaskId();
    const workflow = this.decomposeTask(task);
    
    this.taskTracker.set(taskId, {
      status: 'in_progress',
      steps: workflow,
      results: {}
    });

    try {
      for (const step of workflow) {
        const result = await this.delegateToAgent(step, taskId);
        this.taskTracker.get(taskId).results[step.id] = result;
      }
      
      return this.aggregateResults(taskId);
    } catch (error) {
      await this.handleFailure(taskId, error);
      throw error;
    }
  }

  decomposeTask(task) {
    // Complex task decomposition logic
    if (task.type === 'monthly_business_report') {
      return [
        { id: 'fetch_data', agent: 'data', params: task.dataParams },
        { id: 'analyze_trends', agent: 'analysis', params: task.analysisParams },
        { id: 'generate_report', agent: 'reporting', params: task.reportParams },
        { id: 'send_notification', agent: 'communication', params: task.notificationParams }
      ];
    }
    // Add more task decomposition patterns...
  }

  async delegateToAgent(step, taskId) {
    const agent = this.agents[step.agent];
    
    if (!agent.isAvailable()) {
      // Queue the task if agent is busy
      await this.messageQueue.enqueue({
        taskId,
        step,
        priority: step.priority || 'normal'
      });
      
      return await this.waitForResult(taskId, step.id);
    }
    
    return await agent.execute(step.params);
  }

  async handleFailure(taskId, error) {
    const task = this.taskTracker.get(taskId);
    
    // Implement retry logic, compensation, or escalation
    if (error.retryable && task.retryCount < 3) {
      task.retryCount = (task.retryCount || 0) + 1;
      // Retry failed step
    } else {
      // Escalate to human or fail gracefully
      await this.agents.communication.execute({
        type: 'alert',
        message: \`Task \${taskId} failed: \${error.message}\`
      });
    }
  }
}`}
        </pre>
      </div>

      {/* Specialized Agent Example */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-black mb-4">Specialized Agent Implementation</h3>
        <pre className="bg-black text-white p-4 rounded-md text-sm overflow-x-auto">
          {`class DataAgent {
  constructor(tools) {
    this.tools = tools;
    this.isProcessing = false;
    this.queue = [];
  }

  isAvailable() {
    return !this.isProcessing && this.queue.length < 10;
  }

  async execute(params) {
    this.isProcessing = true;
    
    try {
      switch (params.operation) {
        case 'query':
          return await this.tools.database.query(params.sql, params.bindings);
        
        case 'validate':
          return await this.tools.validator.validate(params.data, params.schema);
        
        case 'transform':
          return await this.tools.transformer.transform(params.data, params.rules);
        
        default:
          throw new Error(\`Unknown operation: \${params.operation}\`);
      }
    } finally {
      this.isProcessing = false;
      this.processQueue();
    }
  }

  async processQueue() {
    if (this.queue.length > 0 && !this.isProcessing) {
      const nextTask = this.queue.shift();
      await this.execute(nextTask.params);
    }
  }
}`}
        </pre>
      </div>
    </div>
  )
}
