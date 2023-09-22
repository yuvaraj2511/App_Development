import React, { useState } from 'react';
import '../assests/CSS/register.css'; 
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
    const navigate = useNavigate();
    const [userType] = useState('customer');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordStrength] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [brandName, setBrandName] = useState('');
    const [craftSpecialties, setCraftSpecialties] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [paymentInformation, setPaymentInformation] = useState('');

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleUserTypeChange = (type) => {
        
      };

    const handleRegister = () => {
        
        navigate('/login');
        
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h2 className="register-heading">Registration</h2>
                {/* User type selection */}
                <div className="user-type-buttons">
                    <button
                        className={`user-type-btn ${userType === 'customer' ? 'active' : ''}`}
                        onClick={() => handleUserTypeChange('customer')}
                    >
                        Customer
                    </button>
                    <button
                        className={`user-type-btn ${userType === 'artisan' ? 'active' : ''}`}
                        onClick={() => handleUserTypeChange('artisan')}
                    >
                        Artisan
                    </button>
                </div>
                
                <form>
                    
                    <div className="input-group">
                        <label className="input-label" htmlFor="fullName">
                            Full Name
                        </label>
                        <input
                            className="input-field"
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label className="input-label" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className="input-field"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label className="input-label" htmlFor="password">
                            Password
                        </label>
                        <div className="password-field">
                            <input
                                className="input-field"
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            <div className="password-toggle" onClick={togglePasswordVisibility}>
                                {passwordVisible ? 'Hide' : 'Show'}
                            </div>
                        </div>
                        <div className={`password-strength ${passwordStrength}`}>
                        </div>
                    </div>
                    {userType === 'customer' && (
                        <>
                            <div className="input-group">
                                <label className="input-label" htmlFor="address">
                                    Address
                                </label>
                                <input
                                    className="input-field"
                                    type="text"
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="pincode">
                                    Pincode
                                </label>
                                <input
                                    className="input-field"
                                    type="number"
                                    id="pincode"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="dateOfBirth">
                                    Date of Birth
                                </label>
                                <input
                                    className="input-field"
                                    type="date"
                                    id="dateOfBirth"
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="phoneNumber">
                                    Phone Number
                                </label>
                                <input
                                    className="input-field"
                                    type="number"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="gender">
                                    Gender
                                </label>
                                <input
                                    className="input-field"
                                    type="text"
                                    id="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    )}
                    {userType === 'artisan' && (
                        <>
                            <div className="input-group">
                                <label className="input-label" htmlFor="brandName">
                                    Brand Name
                                </label>
                                <input
                                    className="input-field"
                                    type="text"
                                    id="brandName"
                                    value={brandName}
                                    onChange={(e) => setBrandName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="craftSpecialties">
                                    Craft Specialties
                                </label>
                                <input
                                    className="input-field"
                                    type="text"
                                    id="craftSpecialties"
                                    value={craftSpecialties}
                                    onChange={(e) => setCraftSpecialties(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="aboutMe">
                                    About Me/Brand
                                </label>
                                <textarea
                                    className="input-field"
                                    id="aboutMe"
                                    value={aboutMe}
                                    onChange={(e) => setAboutMe(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="paymentInformation">
                                    Payment Information
                                </label>
                                <textarea
                                    className="input-field"
                                    id="paymentInformation"
                                    value={paymentInformation}
                                    onChange={(e) => setPaymentInformation(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    )}
                    
                    <button className="btn-register" onClick={handleRegister}>
                        Register
                    </button>
                    <p className="login" onClick={() => navigate('/login')}>
          login
        </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
