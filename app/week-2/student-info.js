// student-info.js

import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <p>Name:Samreet Kaur</p>
      <p>
        GitHub Repository:{' '}
        <Link href="https://github.com/samreetkaurvirk">
            Your GitHub Repository
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
