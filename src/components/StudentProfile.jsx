function StudentProfile({ name, department, year }) {
  return (
    <div className="profile">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  );
}

export default StudentProfile;