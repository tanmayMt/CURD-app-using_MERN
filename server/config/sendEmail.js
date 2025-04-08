import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = async (email, username) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define email options with a more stylish template
const mailOptions = {
  from: `"Tanmay 👨‍💻" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "🎉 Welcome to the MERN CRUD App!",
  html: `
    <div style="font-family: 'Segoe UI', sans-serif; background-color: #121212; padding: 40px; color: #ffffff;">
      <div style="max-width: 600px; margin: auto; background: #1e1e1e; border-radius: 12px; padding: 30px 40px; box-shadow: 0 0 20px rgba(0,0,0,0.3);">
                  <!-- Animated Welcome GIF -->
          <div style="text-align: center; margin-bottom: 25px;">
            <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="Welcome" style="width: 80px; height: auto;" />
          </div>
        <h1 style="text-align: center; color: #00e5ff; font-size: 30px; margin-bottom: 10px;">
          🚀 Hello, ${username}!
        </h1>
        
        <h3 style="text-align: center; color: #ce93d8; font-weight: 500;">
          Welcome to the <span style="color: #ff4081;">MERN Stack CRUD App</span> 🎯
        </h3>
        
        <p style="font-size: 16px; color: #ccc; text-align: center; margin-top: 20px;">
          We're thrilled to have you on board! 🎉<br />
          Your registration was <strong style="color: #00e676;">successfully completed</strong> ✅
        </p>
        
        <div style="margin: 30px 0; border-top: 1px dashed #555;"></div>
        
        <p style="font-size: 15px; color: #bbbbbb;">
          🔐 Now you can securely <strong>Build</strong>, <strong>Read</strong>, <strong>Update</strong>, and <strong>Delete</strong> data using our powerful MERN stack app with built-in authentication and user features.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://yourapp.com/login" target="_blank" style="padding: 12px 30px; background: linear-gradient(to right, #00e5ff, #7c4dff); color: #fff; border-radius: 50px; text-decoration: none; font-size: 16px; font-weight: bold; box-shadow: 0 4px 20px rgba(0,0,0,0.4); transition: 0.3s;">
            🔐 Login Now
          </a>
        </div>
        
        <p style="font-size: 13px; color: #999; text-align: center; margin-top: 30px;">
          If this wasn't you, feel free to ignore this email or contact us immediately.
        </p>

        <div style="margin-top: 40px; text-align: center; font-size: 12px; color: #888;">
          Made with ❤️ by <strong style="color: #ff4081;">Tanmay Samanta</strong><br/>
          📧 <a href="mailto:tanmoy587d@gmail.com" style="color: #00e5ff;">tanmoy587d@gmail.com</a> |
          📞 <a href="tel:+918768006557" style="color: #00e5ff;">+91 8768006557</a><br/>
          💻 <a href="https://portfolio1-three-silk.vercel.app" target="_blank" style="color: #00e5ff;">portfolio1-three-silk.vercel.app</a>
        </div>
      </div>
    </div>
  `,
};




  // Send email
  await transporter.sendMail(mailOptions);
};

// sendEmail("tanmoy587d@gmail.com","Tanmay");