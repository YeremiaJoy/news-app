import MainHead from "../components/layouts/head";
import MainLayout from "../components/layouts/main";
import RegistrationForm from "../components/RegistrationForm";

export default function Home() {
  return (
    <>
      <MainHead
        title={`News App | Registration`}
        description={`News App | Registration by Yeremia Joy`}
      />
      <MainLayout>
        <RegistrationForm />
      </MainLayout>
    </>
  );
}
