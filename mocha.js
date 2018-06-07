const mongoose = require('mongoose');
mongoose.Promise =  global.Promise; 

before(() => {
    mongoose.connect('mongodb://192.168.100.100:27020');
    mongoose.connection
    .once('open', () => {}))
    .on('error', (error) => {
    console.warn('Warning', error);
    });
});
//User.js
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    npm_pol: String,
    lati: float,
    long: float,
    mag: integer
});
const User = mongoose.model('user', UserSchema);
module.exports = User;


//Create Tests
const assert = require('assert');
describe('Reading Crime Records out of the database', () => {
    beforeEach(() => {
        const lati = new User({name: 'lati'});
        const long = new User({name: 'long'});
        lati.save();
        long.save();
        .then(() => {
            done();
    });
    it('finds the tuple with the name of city', (done) => {
        User.findOne({nm_pol: city})
        .then((users) => {
        assert(users[i]._id.toString() === data._id.toString());
        done();
        });
    });
});

beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        done();
    });
})