export function CardLimitation(props: any) {
  return (
    <div className="card__limitations p-6 rounded-2xl bg-white shadow-customShadow">
      <div className="card__header flex items-center justify-start gap-custom mb-4">
        <div className="limitations__icon">
          {/* <Gender /> */}
        </div>
        <div className="title__limitations">
          <h2 className="text-gunMetal text-xl font-semibold">{props.titulo}</h2>
        </div>
      </div>

      <div className="card__body">
        <p className="text-darkElectricBlue text-base font-normal">
          {props.conteudo}
        </p>
      </div>
    </div>
  )
}