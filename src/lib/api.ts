// BILDAHUB Placeholder API client
// Easily swappable for Supabase, Express backend, Formspree, or Firebase

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

export const api = {
  // Join the community form
  async joinCommunity(payload: {
    name: string;
    email: string;
    phone: string;
    state: string;
    interestArea: string;
    experienceLevel: string;
  }): Promise<ApiResponse> {
    await new Promise((resolve) => setTimeout(resolve, 800)); // PLACEHOLDER network latency
    // In production: await fetch('/api/community/join', { method: 'POST', body: JSON.stringify(payload) })
    console.log('[BILDAHUB API] Community Join Submission:', payload);
    return {
      success: true,
      message: `Welcome to BILDAHUB, ${payload.name}! We've sent a WhatsApp & email invite to ${payload.email}.`
    };
  },

  // Apply for a program
  async applyProgram(payload: {
    programId: string;
    name: string;
    email: string;
    phone: string;
    education: string;
    reason: string;
    portfolioUrl?: string;
  }): Promise<ApiResponse> {
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log('[BILDAHUB API] Program Application:', payload);
    return {
      success: true,
      message: 'Application received! Our admissions team will review your application and contact you within 48 hours.'
    };
  },

  // Contact inquiry
  async submitContact(payload: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<ApiResponse> {
    await new Promise((resolve) => setTimeout(resolve, 750));
    console.log('[BILDAHUB API] Contact Inquiry:', payload);
    return {
      success: true,
      message: 'Thank you for reaching out! Our team in Lagos will respond within 24 business hours.'
    };
  },

  // Partner inquiry
  async submitPartner(payload: {
    organization: string;
    contactName: string;
    email: string;
    partnershipType: string;
    budgetOrScope?: string;
    message: string;
  }): Promise<ApiResponse> {
    await new Promise((resolve) => setTimeout(resolve, 850));
    console.log('[BILDAHUB API] Partner Inquiry:', payload);
    return {
      success: true,
      message: 'Partnership request submitted! Our Director of Partnerships will be in touch shortly.'
    };
  },

  // Employer hire form
  async submitHireTalent(payload: {
    company: string;
    roleNeeded: string;
    budget: string;
    email: string;
    details: string;
  }): Promise<ApiResponse> {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log('[BILDAHUB API] Hire Request:', payload);
    return {
      success: true,
      message: 'Hiring inquiry received! Our talent lead will match you with vetted BILDAHUB alumni.'
    };
  },

  // Submit project
  async submitProject(payload: {
    title: string;
    tagline: string;
    category: string;
    builderName: string;
    email: string;
    liveUrl: string;
    githubUrl: string;
    description: string;
  }): Promise<ApiResponse> {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log('[BILDAHUB API] Project Submission:', payload);
    return {
      success: true,
      message: 'Your project has been submitted for community review! You’ll hear from our curators soon.'
    };
  },

  // Event RSVP
  async rsvpEvent(payload: {
    eventId: string;
    name: string;
    email: string;
    phone: string;
    attendanceType: 'In-person' | 'Virtual';
  }): Promise<ApiResponse> {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log('[BILDAHUB API] Event RSVP:', payload);
    return {
      success: true,
      message: 'Seat confirmed! A calendar invite and WhatsApp reminder link have been emailed to you.'
    };
  },

  // Newsletter subscription
  async subscribeNewsletter(email: string): Promise<ApiResponse> {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log('[BILDAHUB API] Newsletter Subscription:', email);
    return {
      success: true,
      message: 'You’re on the list! Watch your inbox for African tech opportunities and weekly build logs.'
    };
  }
};
