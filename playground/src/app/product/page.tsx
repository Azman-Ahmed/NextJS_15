import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      <ul>
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i}>
            <Link href={`/product/${i + 1}`}>
              {`Product ${i + 1}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
