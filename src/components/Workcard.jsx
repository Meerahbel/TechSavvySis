const Workcard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col">
        <img src="/images/heal.png" alt="project" />
        <p className="text-[#ec4899] font-semibold">Heal Hub Center</p>
        <p>
          An e-commerce and booking website with user authentication, API
          consumption, payment gateway etc
        </p>
      </div>
    </div>
  );
};

export default Workcard;
