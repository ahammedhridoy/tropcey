import React from 'react';

const DynamicTable = ({ headers, rows } : any) => {
  return (
    <div className="overflow-x-auto shadow-md bg-white mb-1">
      <table className="w-auto text-sm text-left text-black p-1 m-1 border">
        <thead className="text-xs text-black uppercase bg-white">
          <tr>
            {headers?.map((header : any, index : number) => (
              <th key={index} scope="col" className=" px-1 py-1 text-[10px] text-bold border border-black">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row: any, rowIndex: number) => (
            <tr key={rowIndex} className="bg-white border" >
              {row.map((cell: any, cellIndex: number) => (
                <td key={cellIndex} className="text-[9px] border border-black whitespace-nowrap">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
