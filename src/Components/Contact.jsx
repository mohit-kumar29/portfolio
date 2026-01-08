import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill in all fields.')
      setIsSubmitting(false)
      return
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus('Please enter a valid email address.')
      setIsSubmitting(false)
      return
    }

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'your-new-email@example.com' // Replace with your name
      }

      await emailjs.send(
        'service_cz66um4', // Replace with your EmailJS service ID
        'template_x8mm089', // Replace with your EmailJS template ID
        templateParams,
        'KZYBvZy0s8MnmIRlN' // Replace with your EmailJS public key
      )

      setSubmitStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          Contact
          <span className='text-purple'> Me</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Whether it’s a project or a quick hello, my inbox is always open.
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          {/* Contact Form */}
          <div>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name' className='block text-gray-300 mb-2'>
                  Your Name
                </label>
                <input
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple transition duration-300'
                  type='text'
                  placeholder='Enter your name'
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-gray-300 mb-2'>
                  E-mail Address
                </label>
                <input
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple transition duration-300'
                  type='email'
                  placeholder='Enter your email'
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-gray-300 mb-2'>
                  Your Message
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none focus:border-purple transition duration-300 resize-none'
                  placeholder='Enter your message'
                  disabled={isSubmitting}
                />
              </div>

              {submitStatus && (
                <div className={`text-center ${submitStatus.includes('successfully') ? 'text-gray-400' : 'text-gray-400'}`}>
                  {submitStatus}
                </div>
              )}

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className='space-y-8'>
            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaMapMarkedAlt />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                <p className='text-gray-400'>Ghaziabad, Uttar Pradesh</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaEnvelope />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>E-mail address</h3>
                <p className='text-gray-400'>mohitk93540@gmail.com</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                <p className='text-gray-400'>+91 9354081929</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact