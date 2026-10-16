import React from "react";
import StudentCard from './StudentCard';

function StudentList({datas}) {
    return(
        <div>
            {/* {datas.map((data) => ( */}
            <StudentCard datas={datas} />
            {/* ))} */}
        </div>
    )
}

export default StudentList