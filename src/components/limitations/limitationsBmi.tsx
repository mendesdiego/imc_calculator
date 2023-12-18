import { Age, Gender, Muscle, Pregnancy, Race } from "../icons/iconsLimitations";

export function Limitations() {
  return (
    <div className="limitations px-6 pb-24 md:mt-24 xl:relative xl:flex xl:items-center xl:justify-center xl:flex-col">
      <div className="intro__limitations relative w-full block mb-14 xl:w-1/2">
        <div className="intro__limitations--title">
          <h2 className="text-gunMetal text-center text-titleSection font-semibold leading-8 tracking-tighter mb-8">Limitations of BMI</h2>
        </div>

        <div className="intro__limitations--text">
          <p className="text-darkElectricBlue text-base font-normal text-center">
            Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.
          </p>
        </div>
      </div>

      <div className="container__limitations flex flex-col gap-y-custom md:flex-row md:flex-wrap md:justify-around xl:justify-center xl:gap-x-2">
        <div className="card__limitations p-6 rounded-2xl bg-white shadow-customShadow md:w-box-45 xl:w-1/4">
          <div className="card__header flex items-center justify-start gap-custom mb-4">
            <div className="limitations__icon">
              <Gender />
            </div>
            <div className="title__limitations">
              <h2 className="text-gunMetal text-xl font-semibold">Gender</h2>
            </div>
          </div>

          <div className="card__body">
            <p className="text-darkElectricBlue text-base font-normal">
              The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.
            </p>
          </div>
        </div>

        <div className="card__limitations p-6 rounded-2xl bg-white shadow-customShadow md:w-box-45 xl:w-1/4">
          <div className="card__header flex items-center justify-start gap-custom mb-4">
            <div className="limitations__icon">
              <Age />
            </div>
            <div className="title__limitations">
              <h2 className="text-gunMetal text-xl font-semibold">Age</h2>
            </div>
          </div>

          <div className="card__body">
            <p className="text-darkElectricBlue text-base font-normal">
              In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.
            </p>
          </div>
        </div>

        <div className="card__limitations p-6 rounded-2xl bg-white shadow-customShadow md:w-box-45 xl:w-1/4">
          <div className="card__header flex items-center justify-start gap-custom mb-4">
            <div className="limitations__icon">
              <Muscle />
            </div>
            <div className="title__limitations">
              <h2 className="text-gunMetal text-xl font-semibold">Muscle</h2>
            </div>
          </div>

          <div className="card__body">
            <p className="text-darkElectricBlue text-base font-normal">
              BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.
            </p>
          </div>
        </div>

        <div className="card__limitations p-6 rounded-2xl bg-white shadow-customShadow md:w-box-45 xl:w-1/4">
          <div className="card__header flex items-center justify-start gap-custom mb-4">
            <div className="limitations__icon">
              <Pregnancy />
            </div>
            <div className="title__limitations">
              <h2 className="text-gunMetal text-xl font-semibold">Pregnancy</h2>
            </div>
          </div>

          <div className="card__body">
            <p className="text-darkElectricBlue text-base font-normal">
              Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.
            </p>
          </div>
        </div>

        <div className="card__limitations p-6 rounded-2xl bg-white shadow-customShadow md:w-box-45 xl:w-1/4">
          <div className="card__header flex items-center justify-start gap-custom mb-4">
            <div className="limitations__icon">
              <Race />
            </div>
            <div className="title__limitations">
              <h2 className="text-gunMetal text-xl font-semibold">Race</h2>
            </div>
          </div>

          <div className="card__body">
            <p className="text-darkElectricBlue text-base font-normal">
              Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.
            </p>
          </div>
        </div>
      </div>            
    </div>
  )
}