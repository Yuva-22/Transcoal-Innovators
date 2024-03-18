import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(12);

        // Hash the password using the generated salt
        const hashedPassword = await bcrypt.hash(password, salt);

        return hashedPassword;

    } catch (error) {
        // Handle error, such as logging or throwing an error
        console.error('Error hashing password:', error);
        throw new Error('Error hashing password');
    }
};

const comparePassword = async (password, hashedPassword) => {
    const ans = await bcrypt.compare(password, hashedPassword);
    return ans;
}   

export {hashPassword, comparePassword};