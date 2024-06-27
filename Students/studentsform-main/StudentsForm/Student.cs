using System.Linq;

namespace StudentsForm
{
    public class Student
    {
        private string _name;
        private int _age;
        private int _yearOfStudy;
        private int[] _marks;

        public Student(string name, int age, int yearOfStudy, int[] marks)
        {
            _name = name;
            _age = age;
            _yearOfStudy = yearOfStudy;
            _marks = marks;
        }

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        public int Age
        {
            get { return _age; }
            set { _age = value; }
        }

        public int YearOfStudy
        {
            get { return _yearOfStudy; }
            set { _yearOfStudy = value; }
        }

        public int[] Marks
        {
            get { return _marks; }
            set { _marks = value; }
        }

        public double CalcAvgMark()
        {
            return _marks.Sum() / (double)_marks.Length;
        }

        public override string ToString()
        {
            return $"{_name}, {_age} ani, anul {_yearOfStudy}, media {CalcAvgMark()}";
        }
    }
}