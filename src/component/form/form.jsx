import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        education: '',
        experience: '',
        skills: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
    return (
        <div>
            <form>
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <textarea name="education" placeholder="Education" value={formData.education} onChange={handleChange}></textarea>
                <textarea name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange}></textarea>
                <textarea name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange}></textarea>
                {/* Add more input fields for other sections */}
            </form>
        </div>
    )
}

export default Form
