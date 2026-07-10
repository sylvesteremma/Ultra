import { useState } from "react";
import GenericPage from "../GenericPage";

const courseList = [
  // School of Administration and Management
  "ND, Accounting",
  "ND, Business Administration and Management",
  "ND, Marketing",
  "ND, Public Administration",
  "HND, Accounting",
  "HND, Business Administration and Management",
  "HND, Human Resource Management",
  "HND, Marketing",
  "HND, Public Administration",
  // School of Agriculture and Industry
  "ND, Agricultural Technology",
  "ND, Animal Health and Production Technology",
  "ND, Oceanography and Fisheries Sciences",
  "ND, Organic Agricultural Technology",
  "HND, Agricultural Management",
  "HND, Agricultural Extension and Management",
  "HND, Animal Production Technology",
  // School of Applied Science and Technology
  "ND, Computer Science",
  "ND, Science Laboratory Technology",
  "ND, Statistics",
  "HND, Science Laboratory Technology (Biochemistry)",
  "HND, Science Laboratory Technology (Biochemistry/Chemistry)",
  "HND, Science Laboratory Technology (Biochemistry/Microbiology)",
  "HND, Science Laboratory Technology (Biology)",
  "HND, Science Laboratory Technology (Biology/Microbiology)",
  "HND, Science Laboratory Technology (Chemistry)",
  "HND, Science Laboratory Technology (Environmental Biology)",
  "HND, Science Laboratory Technology (Microbiology)",
  "HND, Science Laboratory Technology (Physics with Electronics)",
  "HND, Statistics",
  // School of Engineering and Technology
  "ND, Civil Engineering Technology",
  "ND, Computer Engineering Technology",
  "ND, Electrical and Electronic Engineering Technology",
  "ND, Environmental Science and Management Technology",
  "ND, Food Science and Technology",
  "HND, Civil Engineering Technology",
  "HND, Computer Engineering Technology",
  "HND, Electrical and Electronic Engineering Technology",
  "HND, Environmental Science and Management Technology",
  "HND, Food Science and Technology",
  // School of Nursing and Health Technology
  "ND, Community Health Technology",
  "ND, Environmental Health Technology",
  "ND, Nursing",
  "ND, Nutrition and Dietetics",
  "ND, Pharmacy Technician",
  "ND, Public Health Technology",
  "HND, Community Health Technology",
  "HND, Environmental Health Technology",
  "HND, Nursing",
  "HND, Nutrition and Dietetics",
  "HND, Public Health Technology",
];

const ApplyNow: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    program: "ND",
    course: "",
  });

  const [files, setFiles] = useState({
    passport: null as File | null,
    jamb: null as File | null,
    ssce: null as File | null,
    ageDeclaration: null as File | null,
    leavingCert: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "passport" | "jamb" | "ssce" | "ageDeclaration" | "leavingCert",
  ) => {
    const file = e.target.files?.[0] || null;
    setFiles((prev) => ({ ...prev, [key]: file }));
  };

  const filteredCourses = courseList.filter((c) => c.startsWith(form.program));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend: just log the collected data for now
    console.log("Form data:", form, files);
    alert("Form collected locally. No submission endpoint configured.");
  };

  return (
    <GenericPage title="Apply Now">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold text-blue-900">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="w-full px-4 py-3 border rounded-md"
              required
            />
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="w-full px-4 py-3 border rounded-md"
              required
            />
            <input
              type="date"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md"
              required
            />
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md"
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              name="nationality"
              value={form.nationality}
              onChange={handleChange}
              placeholder="Nationality"
              className="w-full px-4 py-3 border rounded-md md:col-span-2"
            />
          </div>

          <h2 className="text-2xl font-bold text-blue-900">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full px-4 py-3 border rounded-md"
              required
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="w-full px-4 py-3 border rounded-md"
              required
            />
          </div>

          <h2 className="text-2xl font-bold text-blue-900">Uploads</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">
                Passport Photograph (image)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "passport")}
              />
              {files.passport && (
                <p className="text-sm mt-1">Selected: {files.passport.name}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-2">
                JAMB Result Slip (image or PDF)
              </label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, "jamb")}
              />
              {files.jamb && (
                <p className="text-sm mt-1">Selected: {files.jamb.name}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-2">
                SSCE Result (image or PDF)
              </label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, "ssce")}
              />
              {files.ssce && (
                <p className="text-sm mt-1">Selected: {files.ssce.name}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Age Declaration (image or PDF)
              </label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, "ageDeclaration")}
              />
              {files.ageDeclaration && (
                <p className="text-sm mt-1">
                  Selected: {files.ageDeclaration.name}
                </p>
              )}
            </div>

            <div>
              <label className="block font-semibold mb-2">
                First School Leaving Certificate (image or PDF)
              </label>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, "leavingCert")}
              />
              {files.leavingCert && (
                <p className="text-sm mt-1">
                  Selected: {files.leavingCert.name}
                </p>
              )}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-900">Program & Course</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <div>
              <label className="block font-semibold mb-2">Program</label>
              <select
                name="program"
                value={form.program}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md"
              >
                <option value="ND">National Diploma (ND)</option>
                <option value="HND">Higher National Diploma (HND)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Course</label>
              <select
                name="course"
                value={form.course}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md"
              >
                <option value="">Select course</option>
                {filteredCourses.map((c) => (
                  <option key={c} value={c}>
                    {c.replace(/^ND, |^HND, /, "")}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-900 text-white rounded-md"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </GenericPage>
  );
};

export default ApplyNow;
