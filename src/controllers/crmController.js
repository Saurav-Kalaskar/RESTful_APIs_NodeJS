import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

// Add a new contact
export const addNewContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Get all contacts
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.json(contacts);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get a specific contact by ID
export const getContactWithID = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.contactId);
        res.json(contact);
    } catch (err) {
        res.status(404).send(err);
    }
};

// Update a contact
export const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.contactId,
            req.body,
            { new: true }
        );
        res.json(contact);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Delete a contact
export const deleteContact = async (req, res) => {
    try {
        await Contact.deleteOne({ _id: req.params.contactId });
        res.json({ message: 'Successfully deleted contact' });
    } catch (err) {
        res.status(400).send(err);
    }
};