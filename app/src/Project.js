import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Project(props) {
  return (
     <div class="p-6 bg-white border border-gray-200 rounded-lg shadow">
       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.name}</h5>
       <p className="text-gray-700">{props.description}</p>
       <SyntaxHighlighter language={props.language} style={prism}>
         {props.codeString}
       </SyntaxHighlighter>
       <a href={props.linkUrl} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {props.linkDescription}
       </a>
     </div>
  );
}

export default Project;
