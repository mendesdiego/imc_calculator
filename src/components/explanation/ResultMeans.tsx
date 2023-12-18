export function ImcMeans() {
  return (
    <div className="relative block w-full pb-16 md:flex md:items-center md:justify-center xl:justify-around">
      <div className="container_pessoa relative block w-full px-8 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-beforeGrey before:h-beforeGrey before:rounded-4xl before:bg-extraGrey before:z-0 xl:before:w-beforeFullScreen xl:before:h-beforeHeightFull md:w-1/2 xl:flex xl:items-center xl:justify-center xl:w-1/3">
        <img src="/images/homem_bg.png" alt="" className="relative w-full xl:max-w-full xl:h-auto"/>
      </div>

      <div className="context__means mt-12 px-6 md:w-1/2 xl:w-1/3">
        <h2 className="text-gunMetal text-titleSection font-semibold leading-titleSection mb-8">What your BMI result means</h2>
        <p className="text-darkElectricBlue text-base font-normal">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  )
}