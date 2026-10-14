export default function ToolIcon({ tool }) {
  return (
    <div className="tool__icon" style={{ background: tool.bg, color: tool.color }} role="img" aria-label={tool.name}>
      {tool.logo ? (
        <img src={tool.logo} alt="" />
      ) : tool.short ? (
        <span>{tool.short}</span>
      ) : (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M8 15h38l10 10H18L8 15Zm48 34H18L8 39h38l10 10Z" fill="currentColor" />
        </svg>
      )}
    </div>
  );
}
