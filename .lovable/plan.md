

## Add Email to Careers "Questions? Let's Talk" Section

### What's Changing
Adding the email address `intakes@beyondeatingrecovery.com` to the contact section near the bottom of the Careers page ("Questions? Let's Talk.") so applicants have a clear way to reach out.

### Details
**File:** `src/pages/Careers.tsx` (lines 714-724)

Add an email line between the Phone and Office entries in the contact card:

```
Phone: (360) 726-4141
Email: intakes@beyondeatingrecovery.com   <-- NEW
Office: Portland, Oregon
```

The email will be a clickable `mailto:` link styled consistently with the existing contact info.

