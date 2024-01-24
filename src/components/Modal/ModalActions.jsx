export function ModalActions({handleCloseModal}) {
  return (
    <>
      <div className="app-card-modal-actions">
        <a
          onClick={() => {
            handleCloseModal();
          }}
        >
          Fechar
        </a>
      </div>
    </>
  );
}
