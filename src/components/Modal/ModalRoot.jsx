export function ModalRoot({ children }) {
  return (
    <>
      <div id="modal-section" className="app-card-modal-root">
        <div className="app-card-modal">
            {children}
        </div>
      </div>
    </>
  );
}
