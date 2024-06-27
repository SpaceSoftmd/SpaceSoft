using System;
using System.Collections.Generic;

namespace StudentsForm
{
    public class CompareMarkAvg : IComparer<Student>
    {
        public int Compare(Student x, Student y)
        {
            if (x.CalcAvgMark() > y.CalcAvgMark())
            {
                return 1;
            }

            if (x.CalcAvgMark() < y.CalcAvgMark())
            {
                return -1;
            }

            return 0;
        }
    }
}