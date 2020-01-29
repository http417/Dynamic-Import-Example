import React, {useState} from "react";

const DynamicImport = ({path}) => {
  console.log('path is : ', path);
  const Fallback = () => <div>...Loading</div>

  const [module, setModule] = useState(<Fallback />);
  import(`./${path}`).then(module => module.default)
  .then(module => new Promise(resolve => setTimeout(()=> setModule(module), 1000)))
  return module;
};

export default DynamicImport;