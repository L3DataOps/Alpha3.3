import LogCard from "./LogCard";

const LogViewer = () => {
  return (
    <div className="log-viewer">
      <h1>Log Viewer</h1>
      <p>This is the Log Viewer page.</p>
      <LogCard />
      <LogCard />
    </div>
  );
};

export default LogViewer;

