function Certification(props) {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <div className="p-6 mx-2 bg-slate-200 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 rounded-lg shadow">
        <div className="identification">
          <img src={process.env.PUBLIC_URL + '/' + (document.documentElement.classList.contains('dark') && props.imgDark ? props.imgDark : props.img)} width="auto" alt="" />
          <h5 className="mt-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">{props.name}</h5>
          <p className="text-slate-700 dark:text-slate-400">{props.description}</p>
        </div>
        <div className="chips mt-6">
          {props.chips && props.chips.map((chip, i) => {
            return <div key={i} className="inline-block relative px-2 py-1 mr-2 mb-2 font-sans text-xs font-bold text-slate-200 dark:text-white uppercase bg-slate-500 dark:bg-slate-900 rounded-md select-none whitespace-nowrap">
              <span>{chip}</span>
            </div>
          })}
        </div>
      </div>
    </a>
  );
}

export default Certification;
