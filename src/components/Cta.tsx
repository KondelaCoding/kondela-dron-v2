const Cta = () => {
  return (
    <div className="bg-[var(--white-color)] text-[color:var(--black-color)] flex flex-col items-center relative pt-32">
      <div className="bg-[var(--primary-color)] h-96 w-full -skew-y-6 absolute top-10"></div>
      <div className="bg-[var(--primary-color)] h-96 w-full -skew-y-6 absolute bottom-0"></div>
      <div className="z-10 flex flex-col items-center px-5">
        <h2 className="text-center text-4xl tracking-tighter">
          Jesteśmy tu dla <span className="text-[color:var(--white-color)]">Ciebie!</span>
        </h2>
        <p className="text-[color:var(--black-color)] text-center text-xl font-light mt-5 max-w-[700px] mx-auto mb-10">
          Jesteśmy pasjonatami filmowania dronem, oferując usługi profesjonalnego rejestrowania obrazu z powietrza.
        </p>
        <button className="px-10 py-3 bg-[var(--white-color)] text-[var(--black-color)] duration-100 shadow-lg mb-20 hover:bg-[#ffefc2] active:scale-95 active:opacity-80">
          Skontaktuj się
        </button>
      </div>
    </div>
  );
};

export default Cta;