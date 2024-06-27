using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace StudentsForm
{
    public partial class Form1 : Form
    {
        private List<Student> _students = new List<Student>();

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            SetFormProperties();
        }

        private void SetFormProperties()
        {
            CenterToScreen();
            Click += (sender, args) => { ActiveControl = null; };
            Text = @"Students";
        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            _students.Add(new Student(
                boxName.Text,
                Convert.ToInt32(numericAge.Text),
                Convert.ToInt32(comboYear.Text),
                new[]
                {
                    Convert.ToInt32(comboMark1.Text),
                    Convert.ToInt32(comboMark2.Text),
                    Convert.ToInt32(comboMark3.Text),
                    Convert.ToInt32(comboMark4.Text),
                    Convert.ToInt32(comboMark5.Text)
                }
            ));
            UpdateListBox();
            boxName.Text = "";
            numericAge.Text = "";
            comboYear.Text = "";
            comboYear.SelectedIndex = -1;
            comboMark1.SelectedIndex = -1;
            comboMark2.SelectedIndex = -1;
            comboMark3.SelectedIndex = -1;
            comboMark4.SelectedIndex = -1;
            comboMark5.SelectedIndex = -1;
        }

        private void btnSortName_Click(object sender, EventArgs e)
        {
            CompareName compareName = new CompareName();
            _students.Sort(compareName);
            UpdateListBox();
        }
        
        private void btnSortMark_Click(object sender, EventArgs e)
        {
            CompareMarkAvg compareMarkAvg = new CompareMarkAvg();
            _students.Sort(compareMarkAvg);
            UpdateListBox();
        }

        private void btnYear_Click(object sender, EventArgs e)
        {
            listBox.Items.Clear();
            int year = Convert.ToInt32(comboFindYear.Text);
            foreach (Student student in _students)
            {
                if (student.YearOfStudy == year)
                {
                    listBox.Items.Add(student);
                }
            }
        }        
        
        private void btnFindName_Click(object sender, EventArgs e)
        {
            listBox.Items.Clear();
            string name = boxFindName.Text;
            foreach (Student student in _students)
            {
                if (student.Name.Equals(name))
                {
                    listBox.Items.Add(student);
                }
            }
        }
        
        private void UpdateListBox()
        {
            listBox.Items.Clear();
            foreach (Student student in _students)
            {
                listBox.Items.Add(student);
            }
        }
    }
}