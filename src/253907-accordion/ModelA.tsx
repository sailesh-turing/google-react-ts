import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import classnames from 'classnames';
import { Accordion } from 'react-bootstrap';

interface OperationRequest {
  title: string;
  content: React.ReactNode;
}

const App: React.FC = () => {
  const data = {Operation_Request_List: [ 'Request 1', 'Request 2'  ]};

  return (
    <div className="mx-auto max-w-3xl p-8">
      {data &&
  data.Operation_Request_List.map((operation: string) => (
    <Accordion key={operation}>
      <Accordion.Header>
        {({ open }) => ( // No curly braces here!  Directly render the returned JSX.
          <div className="flex w-full cursor-pointer items-center justify-between py-5 text-xl font-semibold">
            title
            <IoIosArrowDown
              className={cn(
                'h-5 w-5 -rotate-90 transform transition-transform duration-300',
                open && '-rotate-0'
              )}
            />
          </div>
        )} {/* Close the Accordion.Header here */}
      </Accordion.Header>
      <Accordion.Body className="mb-7">conthent</Accordion.Body>
    </Accordion>
  ))}
    </div>
  );
};

export default App;