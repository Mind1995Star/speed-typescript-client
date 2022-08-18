import Header from "../components/header";
import PublicPage from "../views/public";
import Modal from "../pages/modal";

export default function PublicLayout() {
  return (
    <>
      <div className="bg-[#060606]">
        <Header />
        <PublicPage />
        <Modal />
      </div>
    </>
  );
}
