using System;
using System.Collections.Generic;

namespace StudentsForm
{
    public class CompareName : IComparer<Student>
    {
        public int Compare(Student x, Student y)
        {
            if (x.Name.CompareTo(y.Name) > 0)
            {
                return 1;
            }

            if (x.Name.CompareTo(y.Name) < 0)
            {
                return -1;
            }

            return 0;
        }
    }
}