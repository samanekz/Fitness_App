function btnPrimary(props) {
  return (
    <div>
      <button className="flex-initial mt-24  gradientBg-orange rounded-3xl text-black h-11 text-base px-6">
        {props.children}
      </button>
    </div>
  );
}
export default btnPrimary;
