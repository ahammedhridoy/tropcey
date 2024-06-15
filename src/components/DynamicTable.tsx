import React from 'react';

const DynamicTable = ({ headers, rows } : any) => {
  return (
    <div className="overflow-x-auto shadow-md bg-white mb-2">
      <table className="w-auto text-sm text-left text-black p-2 m-2 border">
        <thead className="text-xs text-black uppercase bg-white">
          <tr>
            {headers?.map((header : any, index : number) => (
              <th key={index} scope="col" className=" px-2 py-2 text-[12px] text-bold border border-black">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row: any, rowIndex: number) => (
            <tr key={rowIndex} className="bg-white border" >
              {row.map((cell: any, cellIndex: number) => (
                <td key={cellIndex} className="text-[11px] border border-black whitespace-nowrap">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
