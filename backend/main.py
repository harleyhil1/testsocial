from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import datetime

app = FastAPI(title="Montessori Academy API", version="1.0.0")

# CORS — allow the Next.js frontend to call this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://azma.academy",
        "https://www.azma.academy",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Models ---

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    childAge: Optional[str] = None
    interest: str = "tour"
    message: Optional[str] = None


class TourRequest(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    preferred_date: Optional[str] = None
    program_interest: Optional[str] = None
    message: Optional[str] = None


# In-memory store (replace with a real DB in production)
submissions: list[dict] = []


# --- Routes ---

@app.get("/")
def root():
    return {"status": "ok", "school": "Montessori Academy", "location": "Paradise Valley, AZ"}


@app.get("/health")
def health():
    return {"status": "healthy", "timestamp": datetime.datetime.utcnow().isoformat()}


@app.post("/contact", status_code=201)
def submit_contact(form: ContactForm):
    """Handle contact form submissions."""
    entry = {
        "id": len(submissions) + 1,
        "type": "contact",
        "submitted_at": datetime.datetime.utcnow().isoformat(),
        **form.model_dump(),
    }
    submissions.append(entry)

    # In production: send an email notification here
    # e.g. send_email(to="info@azma.academy", subject=f"New inquiry from {form.name}", ...)

    return {
        "success": True,
        "message": f"Thank you, {form.name}. We'll be in touch soon.",
        "id": entry["id"],
    }


@app.post("/tour", status_code=201)
def schedule_tour(request: TourRequest):
    """Handle tour scheduling requests."""
    entry = {
        "id": len(submissions) + 1,
        "type": "tour",
        "submitted_at": datetime.datetime.utcnow().isoformat(),
        **request.model_dump(),
    }
    submissions.append(entry)

    return {
        "success": True,
        "message": f"Tour request received for {request.name}. We'll confirm your visit shortly.",
        "id": entry["id"],
    }


@app.get("/programs")
def get_programs():
    """Return program information."""
    return {
        "programs": [
            {
                "id": "toddler",
                "title": "Toddler",
                "age_range": "18 months – 3 years",
                "description": "A gentle, nurturing environment for our youngest learners.",
            },
            {
                "id": "primary",
                "title": "Primary",
                "age_range": "3 – 6 years",
                "description": "Classic Montessori materials and a prepared environment for early childhood.",
            },
            {
                "id": "lower-elementary",
                "title": "Lower Elementary",
                "age_range": "6 – 9 years",
                "description": "Collaborative, inquiry-driven learning anchored in the Great Lessons.",
            },
            {
                "id": "upper-elementary",
                "title": "Upper Elementary",
                "age_range": "9 – 12 years",
                "description": "Student-driven research and growing ownership of learning.",
            },
            {
                "id": "middle-school",
                "title": "Middle School",
                "age_range": "12 – 15 years",
                "description": "Purpose, identity, and readiness for the world ahead.",
            },
        ]
    }


@app.get("/school-info")
def get_school_info():
    """Return school details."""
    return {
        "name": "Montessori Academy",
        "tagline": "Where Curiosity Leads. Excellence Follows.",
        "type": "Public Charter School",
        "address": {
            "street": "6050 N Invergordon Rd",
            "city": "Paradise Valley",
            "state": "AZ",
            "zip": "85253",
        },
        "phone": "(480) 945-1121",
        "email": "info@azma.academy",
        "website": "https://www.azma.academy",
        "grades": "Toddler – 8th Grade",
        "office_hours": {
            "weekdays": "7:30 AM – 4:00 PM",
            "weekends": "Closed",
        },
    }
