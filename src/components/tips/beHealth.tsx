import { AdequateSleep, Eating, RegularExercise } from "../icons/iconsHealth";

export function HealthTips() {
  return (
    <div className="container__tips relative flex w-full items-center justify-center">
      <div className="healthy relative block w-full py-14 px-6 md:px-9 shadow-customShadow xl:w-91 xl:flex xl:items-center justify-center">
        <div className="healthy__box flex items-center justify-between mb-10 xl:items-start xl:justify-center xl:flex-col xl:w-1/3">
          <div className="healthy__icon relative flex items-center justify-center w-16 h-16 rounded-radio bg-pinkOpacity">
            <Eating />
          </div>

          <div className="healthy__text w-3/4 mt-8">
            <h2 className="text-gunMetal text-2xl font-semibold tracking-titleTips mb-4">Healthy eating</h2>
            <p className="text-darkElectricBlue text-base font-normal">
              Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </div>

        <div className="healthy__box flex items-center justify-between mb-10 xl:items-start xl:justify-center xl:flex-col xl:w-1/3">
          <div className="healthy__icon relative flex items-center justify-center w-16 h-16 rounded-radio bg-orangeOpacity">
            <RegularExercise />
          </div>

          <div className="healthy__text w-3/4 mt-8">
            <h2 className="text-gunMetal text-2xl font-semibold tracking-titleTips mb-4">Regular exercise</h2>
            <p className="text-darkElectricBlue text-base font-normal">
              Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </div>

        <div className="healthy__box flex items-center justify-between xl:items-start xl:justify-center xl:flex-col xl:w-1/3">
          <div className="healthy__icon relative flex items-center justify-center w-16 h-16 rounded-radio bg-greenOpacity">
            <AdequateSleep />
          </div>

          <div className="healthy__text w-3/4 mt-8">
            <h2 className="text-gunMetal text-2xl font-semibold tracking-titleTips mb-4">Adequate sleep</h2>
            <p className="text-darkElectricBlue text-base font-normal">
              Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}