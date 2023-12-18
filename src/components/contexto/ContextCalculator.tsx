export function ContextCalculator() {
  return (
    <div className="calculator relative block w-full pt-extra px-0 pb-12 bg-customGradient rounded-customBorderRadius xl:pt-40 xl:w-1/2 xl:pl-14 xl:top-negativeTop">
      <div className="calculator__content relative w-full block pt-6 px-6 md:flex md:items-center md:justify-center md:flex-col xl:items-start xl:justify-start">
        <div className="calculator__content--title relative w-full block md:flex md:items-center md:justify-center xl:justify-start">
          <h1 className='text-gunMetal text-5xl font-semibold leading-title text-center md:w-mainTitle xl:text-left xl:w-titleFullScreen'>Body Mass Index Calculator</h1>
        </div>

        <div className="calculator__content--text relative w-full block mt-6 mx-0 mb-12 xl:w-77">
          <p className='text-darkElectricBlue text-base text-center xl:text-left'>
            Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
          </p>
        </div>
      </div>
    </div>
  )
}