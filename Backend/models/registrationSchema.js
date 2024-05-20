import mongoose, { Schema } from 'mongoose';

const registrationSchema = new Schema({
    collegeName: {
        type: String,
        required: true,
    },
    teamName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    altPhoneNo: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid alternate phone number!`
        }
    },
    transactionId: {
        type: String,
        required: true,
    }
});

const Register = mongoose.model("Register", registrationSchema);

export default Register;
