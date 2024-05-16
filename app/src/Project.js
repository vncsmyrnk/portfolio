import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Project(props) {
  return (
    <div className="p-6 mx-2 bg-slate-200 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 rounded-lg shadow">
      <h5 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{props.name}</h5>
      <p className="text-slate-700 dark:text-slate-400">{props.description}</p>
      <div className="tags mt-4">
        {props.tags && props.tags.map((tag, i) => {
          return <div key={i} className="inline-block relative px-2 py-1 mr-2 mb-2 font-sans text-xs font-bold text-slate-200 dark:text-white uppercase bg-slate-500 dark:bg-slate-900 rounded-md select-none whitespace-nowrap">
            <span>{tag}</span>
          </div>
        })}
      </div>
      <SyntaxHighlighter language={props.language} style={darcula}>
        {props.codeString}
      </SyntaxHighlighter>
      <a href={props.linkUrl} target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 mt-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       {props.linkDescription}
      </a>
    </div>
  );
}

export default Project;
