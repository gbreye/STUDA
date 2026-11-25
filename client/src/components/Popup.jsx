export default function Popup({ isOpen, onClose, Title, Type = "Primary", Content }) {
    if (!isOpen) return null;

    const cores = {
        Warning: "bg-warning",
        Alert: "bg-danger",
        Primary: "bg-primary",
    };

    const type = cores[Type] ?? "bg-primary";

    return (
        <div className="position-fixed top-0 start-0 vw-100 vh-100 d-flex align-items-center justify-content-center blur-popup-shell z-3">
            <div
                className={`hover-lift p-3 bg-gradient rounded-6 d-flex align-items-center justify-content-center flex-column ${type}`}
                style={{ width: 300, height: 300 }}
            >
                <h1 className="bg-light fg-black fs-2 p-3">{Title}</h1>
                <p className="fg-black">{Content}</p>
                <button className="btn btn-primary" onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}