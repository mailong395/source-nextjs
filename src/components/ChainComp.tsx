'use Client'

import { useNetwork } from "wagmi";

const ChainComp = () => {
  const netWork = useNetwork();

  const handleShowChain = () => {
    console.log('netWork', netWork);
  }

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleShowChain()}>
        Show Chains
      </button>
    </div>
  );
}

export default ChainComp;