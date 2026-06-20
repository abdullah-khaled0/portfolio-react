import { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import { skillsData } from "../../data/skillsData";
import { experienceData } from "../../data/experienceData";

export const TerminalConsole = () => {
  const [history, setHistory] = useState([
    { type: "system", text: "Initializing Abdullah.AI Neural Agent Console..." },
    { type: "system", text: "Connection: SECURE [Model: Llama-3.2-3B-Orchestrated]" },
    { type: "system", text: "Status: ONLINE" },
    { type: "system", text: "Type '/help' to display list of available interactive directives." },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
  const terminalEndRef = useRef(null);

  // Auto scroll to bottom when terminal output updates
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, loading]);

  const handleCommandSubmit = async (e) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    // Append command to history
    setHistory(prev => [...prev, { type: "command", text: inputVal }]);
    setInputVal("");
    setLoading(true);

    // Simulate network delay / LLM thinking time
    setTimeout(() => {
      processCommand(cleanCmd);
      setLoading(false);
    }, 450);
  };

  const processCommand = (cmd) => {
    let reply = "";
    
    switch (cmd) {
      case "/help":
        reply = `Available directives:
  /skills      - Prints Abdullah's core skill matrices.
  /experience  - Summarizes current work highlights.
  /agent       - Spawns a diagnostic agent analyzing CV capabilities.
  /clear       - Wipes the console logs.
  /whoami      - Prints quick bio overview.`;
        break;

      case "/skills":
        reply = skillsData.map(group => {
          return `[${group.category}]\n  -> ${group.items.join(", ")}`;
        }).join("\n\n");
        break;

      case "/experience":
        reply = experienceData.map(exp => {
          return `${exp.role} @ ${exp.company} (${exp.duration})\n  Key: ${exp.highlights[0]}`;
        }).join("\n\n");
        break;

      case "/whoami":
        reply = `NAME: Abdullah Khaled
ROLE: AI Engineer / Agent Architect
BIO: Specialized in architecting multi-agent pipelines (LangGraph/CrewAI) and automation systems (n8n). Reduced content creation times by 90% and CV screening cycles using semantic analysis.`;
        break;

      case "/clear":
        setHistory([]);
        return;

      case "/agent":
        reply = `[Agent Diagnostic Output]
> Running semantic evaluation on CV profiles...
> Found matching pattern: [AI Engineer @ Areeb Technology]
> Core architecture evaluated: LangChain + LangGraph + Celery + FastAPI
> Verdict: High capability in Agent Orchestration, Model Context Protocol (MCP) server development, and end-to-end LLM pipelines.
> Automation Impact Factor: 90% Manual Time Reduction.`;
        break;

      default:
        reply = `Command not recognized: '${cmd}'. Type '/help' for options.`;
    }

    setHistory(prev => [...prev, { type: "reply", text: reply }]);
  };

  return (
    <section className="py-5" id="console-sandbox" style={{ backgroundColor: "#060814" }}>
      <Container>
        <div className="text-center mb-4">
          <h2 className="section-title">AI Sandbox Command-Line</h2>
          <p className="section-subtitle">
            Interact directly with the portfolio database using our retro simulated terminal client. Try typing directives.
          </p>
        </div>
        
        <div className="terminal-container mx-auto" style={{ maxWidth: "800px" }}>
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <div className="terminal-title-text">guest@abdullah-ai-terminal:~</div>
            <div style={{ width: "42px" }}></div>
          </div>
          
          <div className="terminal-body">
            {history.map((line, idx) => (
              <div key={idx} className="terminal-line">
                {line.type === "command" && (
                  <span>
                    <span className="terminal-prompt-prefix">$</span>
                    <span className="terminal-command-history">{line.text}</span>
                  </span>
                )}
                {line.type === "system" && (
                  <span style={{ color: "var(--color-text-secondary)" }}>{line.text}</span>
                )}
                {line.type === "reply" && (
                  <pre className="terminal-system-reply">{line.text}</pre>
                )}
              </div>
            ))}
            
            {loading && (
              <div className="terminal-line">
                <span className="terminal-loading-spinner">⠋</span>
                <span style={{ color: "var(--color-text-muted)" }}>Running LLM diagnostic agent...</span>
              </div>
            )}
            
            <form onSubmit={handleCommandSubmit} className="terminal-input-container mt-1">
              <span className="terminal-prompt-prefix">$</span>
              <input
                type="text"
                className="terminal-input-field"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command here (e.g. /help, /agent)..."
                disabled={loading}
                autoFocus
              />
            </form>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </Container>
    </section>
  );
};
