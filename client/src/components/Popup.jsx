export default function Popup({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="position-fixed top-0 start-0 vw-100 vh-100 d-flex align-items-center justify-content-center blur-popup-shell z-3">
            <div className="hover-lift p-3 bg-primary bg-gradient rounded d-flex align-items-center justify-content-center flex-column" style={{ width: 300, height: 300 }}>
                <h1>Olá!</h1>
                <button className="btn btn-primary" onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}