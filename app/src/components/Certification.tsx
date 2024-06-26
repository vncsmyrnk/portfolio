type CertificationProps = {
  description: string;
  name: string;
  img: string;
  imgDark: string;
  tags: string[];
  url: string;
};

function Certification({
  description,
  name,
  img,
  imgDark,
  tags,
  url,
}: CertificationProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="p-6 mx-2 bg-slate-200 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 rounded-lg shadow">
        <div className="identification">
          <div className="institution-logo">
            <img
              className="dark-image hidden dark:block"
              src={imgDark || img}
              width="auto"
              alt=""
            />
            <img
              className="light-image default-image block dark:hidden"
              src={img}
              width="auto"
              alt=""
            />
          </div>
          <h5 className="name mt-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            {name}
          </h5>
          <p className="description text-slate-700 dark:text-slate-400">
            {description}
          </p>
        </div>
        <div className="tags mt-6">
          {tags &&
            tags.map((tag: string, i: number) => {
              return (
                <div
                  key={i}
                  className="inline-block relative px-2 py-1 mr-2 mb-2 font-sans text-xs font-bold text-slate-200 dark:text-white uppercase bg-slate-500 dark:bg-slate-900 rounded-md select-none whitespace-nowrap"
                >
                  <span>{tag}</span>
                </div>
              );
            })}
        </div>
      </div>
    </a>
  );
}

export default Certification;
