namespace StudentsForm
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }

            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.boxName = new System.Windows.Forms.TextBox();
            this.numericAge = new System.Windows.Forms.NumericUpDown();
            this.comboYear = new System.Windows.Forms.ComboBox();
            this.comboMark1 = new System.Windows.Forms.ComboBox();
            this.comboMark2 = new System.Windows.Forms.ComboBox();
            this.comboMark3 = new System.Windows.Forms.ComboBox();
            this.comboMark4 = new System.Windows.Forms.ComboBox();
            this.comboMark5 = new System.Windows.Forms.ComboBox();
            this.btnAdd = new System.Windows.Forms.Button();
            this.listBox = new System.Windows.Forms.ListBox();
            this.groupBox = new System.Windows.Forms.GroupBox();
            this.boxFindName = new System.Windows.Forms.TextBox();
            this.comboFindYear = new System.Windows.Forms.ComboBox();
            this.btnFindName = new System.Windows.Forms.Button();
            this.btnYear = new System.Windows.Forms.Button();
            this.btnSortMark = new System.Windows.Forms.Button();
            this.btnSortName = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.numericAge)).BeginInit();
            this.groupBox.SuspendLayout();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.Font = new System.Drawing.Font("Times New Roman", 10.2F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(16, 14);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(68, 26);
            this.label1.TabIndex = 0;
            this.label1.Text = "Name\r\n";
            // 
            // label2
            // 
            this.label2.Font = new System.Drawing.Font("Times New Roman", 10.2F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(16, 50);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(68, 26);
            this.label2.TabIndex = 1;
            this.label2.Text = "Age\r\n";
            // 
            // label3
            // 
            this.label3.Font = new System.Drawing.Font("Times New Roman", 10.2F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.Location = new System.Drawing.Point(16, 130);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(68, 26);
            this.label3.TabIndex = 2;
            this.label3.Text = "Marks\r\n\r\n";
            // 
            // label4
            // 
            this.label4.Font = new System.Drawing.Font("Times New Roman", 10.2F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.Location = new System.Drawing.Point(16, 89);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(68, 26);
            this.label4.TabIndex = 3;
            this.label4.Text = "Year\r\n\r\n";
            // 
            // boxName
            // 
            this.boxName.Font = new System.Drawing.Font("Times New Roman", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.boxName.Location = new System.Drawing.Point(90, 11);
            this.boxName.Name = "boxName";
            this.boxName.Size = new System.Drawing.Size(195, 27);
            this.boxName.TabIndex = 4;
            // 
            // numericAge
            // 
            this.numericAge.Location = new System.Drawing.Point(90, 50);
            this.numericAge.Minimum = new decimal(new int[] { 15, 0, 0, 0 });
            this.numericAge.Name = "numericAge";
            this.numericAge.ReadOnly = true;
            this.numericAge.Size = new System.Drawing.Size(45, 22);
            this.numericAge.TabIndex = 5;
            this.numericAge.Value = new decimal(new int[] { 15, 0, 0, 0 });
            // 
            // comboYear
            // 
            this.comboYear.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboYear.FormattingEnabled = true;
            this.comboYear.Items.AddRange(new object[] { "1", "2", "3", "4" });
            this.comboYear.Location = new System.Drawing.Point(88, 87);
            this.comboYear.Name = "comboYear";
            this.comboYear.Size = new System.Drawing.Size(45, 24);
            this.comboYear.TabIndex = 6;
            // 
            // comboMark1
            // 
            this.comboMark1.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboMark1.FormattingEnabled = true;
            this.comboMark1.Items.AddRange(new object[] { "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" });
            this.comboMark1.Location = new System.Drawing.Point(88, 129);
            this.comboMark1.Name = "comboMark1";
            this.comboMark1.Size = new System.Drawing.Size(48, 24);
            this.comboMark1.TabIndex = 7;
            // 
            // comboMark2
            // 
            this.comboMark2.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboMark2.FormattingEnabled = true;
            this.comboMark2.Items.AddRange(new object[] { "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" });
            this.comboMark2.Location = new System.Drawing.Point(141, 129);
            this.comboMark2.Name = "comboMark2";
            this.comboMark2.Size = new System.Drawing.Size(48, 24);
            this.comboMark2.TabIndex = 8;
            // 
            // comboMark3
            // 
            this.comboMark3.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboMark3.FormattingEnabled = true;
            this.comboMark3.Items.AddRange(new object[] { "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" });
            this.comboMark3.Location = new System.Drawing.Point(194, 129);
            this.comboMark3.Name = "comboMark3";
            this.comboMark3.Size = new System.Drawing.Size(48, 24);
            this.comboMark3.TabIndex = 9;
            // 
            // comboMark4
            // 
            this.comboMark4.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboMark4.FormattingEnabled = true;
            this.comboMark4.Items.AddRange(new object[] { "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" });
            this.comboMark4.Location = new System.Drawing.Point(247, 129);
            this.comboMark4.Name = "comboMark4";
            this.comboMark4.Size = new System.Drawing.Size(48, 24);
            this.comboMark4.TabIndex = 10;
            // 
            // comboMark5
            // 
            this.comboMark5.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboMark5.FormattingEnabled = true;
            this.comboMark5.Items.AddRange(new object[] { "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" });
            this.comboMark5.Location = new System.Drawing.Point(300, 129);
            this.comboMark5.Name = "comboMark5";
            this.comboMark5.Size = new System.Drawing.Size(48, 24);
            this.comboMark5.TabIndex = 11;
            // 
            // btnAdd
            // 
            this.btnAdd.BackColor = System.Drawing.Color.Purple;
            this.btnAdd.Cursor = System.Windows.Forms.Cursors.Hand;
            this.btnAdd.FlatAppearance.BorderColor = System.Drawing.Color.White;
            this.btnAdd.FlatAppearance.BorderSize = 3;
            this.btnAdd.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnAdd.Font = new System.Drawing.Font("Times New Roman", 10.2F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnAdd.Location = new System.Drawing.Point(145, 175);
            this.btnAdd.Name = "btnAdd";
            this.btnAdd.Size = new System.Drawing.Size(140, 37);
            this.btnAdd.TabIndex = 12;
            this.btnAdd.Text = "Add student";
            this.btnAdd.UseVisualStyleBackColor = false;
            this.btnAdd.Click += new System.EventHandler(this.btnAdd_Click);
            // 
            // listBox
            // 
            this.listBox.FormattingEnabled = true;
            this.listBox.ItemHeight = 16;
            this.listBox.Location = new System.Drawing.Point(354, 10);
            this.listBox.Name = "listBox";
            this.listBox.Size = new System.Drawing.Size(433, 420);
            this.listBox.TabIndex = 13;
            // 
            // groupBox
            // 
            this.groupBox.Controls.Add(this.boxFindName);
            this.groupBox.Controls.Add(this.comboFindYear);
            this.groupBox.Controls.Add(this.btnFindName);
            this.groupBox.Controls.Add(this.btnYear);
            this.groupBox.Controls.Add(this.btnSortMark);
            this.groupBox.Controls.Add(this.btnSortName);
            this.groupBox.Font = new System.Drawing.Font("Times New Roman", 10.2F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.groupBox.Location = new System.Drawing.Point(16, 256);
            this.groupBox.Name = "groupBox";
            this.groupBox.Size = new System.Drawing.Size(311, 174);
            this.groupBox.TabIndex = 14;
            this.groupBox.TabStop = false;
            this.groupBox.Text = "Show";
            // 
            // boxFindName
            // 
            this.boxFindName.Font = new System.Drawing.Font("Times New Roman", 10.2F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.boxFindName.Location = new System.Drawing.Point(157, 134);
            this.boxFindName.Name = "boxFindName";
            this.boxFindName.Size = new System.Drawing.Size(148, 27);
            this.boxFindName.TabIndex = 15;
            // 
            // comboFindYear
            // 
            this.comboFindYear.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboFindYear.FormattingEnabled = true;
            this.comboFindYear.Items.AddRange(new object[] { "1", "2", "3", "4" });
            this.comboFindYear.Location = new System.Drawing.Point(157, 98);
            this.comboFindYear.Name = "comboFindYear";
            this.comboFindYear.Size = new System.Drawing.Size(45, 27);
            this.comboFindYear.TabIndex = 15;
            // 
            // btnFindName
            // 
            this.btnFindName.Font = new System.Drawing.Font("Times New Roman", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnFindName.Location = new System.Drawing.Point(6, 134);
            this.btnFindName.Name = "btnFindName";
            this.btnFindName.Size = new System.Drawing.Size(145, 30);
            this.btnFindName.TabIndex = 3;
            this.btnFindName.Text = "Find by name";
            this.btnFindName.UseVisualStyleBackColor = true;
            this.btnFindName.Click += new System.EventHandler(this.btnFindName_Click);
            // 
            // btnYear
            // 
            this.btnYear.Font = new System.Drawing.Font("Times New Roman", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnYear.Location = new System.Drawing.Point(6, 98);
            this.btnYear.Name = "btnYear";
            this.btnYear.Size = new System.Drawing.Size(145, 30);
            this.btnYear.TabIndex = 2;
            this.btnYear.Text = "Students from year";
            this.btnYear.UseVisualStyleBackColor = true;
            this.btnYear.Click += new System.EventHandler(this.btnYear_Click);
            // 
            // btnSortMark
            // 
            this.btnSortMark.Font = new System.Drawing.Font("Times New Roman", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSortMark.Location = new System.Drawing.Point(6, 62);
            this.btnSortMark.Name = "btnSortMark";
            this.btnSortMark.Size = new System.Drawing.Size(145, 30);
            this.btnSortMark.TabIndex = 1;
            this.btnSortMark.Text = "Sort by avg mark";
            this.btnSortMark.UseVisualStyleBackColor = true;
            this.btnSortMark.Click += new System.EventHandler(this.btnSortMark_Click);
            // 
            // btnSortName
            // 
            this.btnSortName.Font = new System.Drawing.Font("Times New Roman", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSortName.Location = new System.Drawing.Point(6, 26);
            this.btnSortName.Name = "btnSortName";
            this.btnSortName.Size = new System.Drawing.Size(145, 30);
            this.btnSortName.TabIndex = 0;
            this.btnSortName.Text = "Sort by name\r\n";
            this.btnSortName.UseVisualStyleBackColor = true;
            this.btnSortName.Click += new System.EventHandler(this.btnSortName_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(128)))), ((int)(((byte)(128)))), ((int)(((byte)(255)))));
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.groupBox);
            this.Controls.Add(this.listBox);
            this.Controls.Add(this.btnAdd);
            this.Controls.Add(this.comboMark5);
            this.Controls.Add(this.comboMark4);
            this.Controls.Add(this.comboMark3);
            this.Controls.Add(this.comboMark2);
            this.Controls.Add(this.comboMark1);
            this.Controls.Add(this.comboYear);
            this.Controls.Add(this.numericAge);
            this.Controls.Add(this.boxName);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.numericAge)).EndInit();
            this.groupBox.ResumeLayout(false);
            this.groupBox.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();
        }

        private System.Windows.Forms.TextBox boxFindName;

        private System.Windows.Forms.ComboBox comboFindYear;

        private System.Windows.Forms.Button btnYear;
        private System.Windows.Forms.Button btnFindName;

        private System.Windows.Forms.Button btnSortMark;

        private System.Windows.Forms.Button btnSortName;

        private System.Windows.Forms.GroupBox groupBox;

        private System.Windows.Forms.ListBox listBox;

        private System.Windows.Forms.Button btnAdd;

        private System.Windows.Forms.ComboBox comboMark1;
        private System.Windows.Forms.ComboBox comboMark2;
        private System.Windows.Forms.ComboBox comboMark3;
        private System.Windows.Forms.ComboBox comboMark4;
        private System.Windows.Forms.ComboBox comboMark5;

        private System.Windows.Forms.NumericUpDown numericAge;
        private System.Windows.Forms.ComboBox comboYear;

        private System.Windows.Forms.TextBox boxName;

        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;

        private System.Windows.Forms.Label label1;

        #endregion
    }
}