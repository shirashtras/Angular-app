import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Idea, IdeaStatus } from './idea.model';

@Component({
  selector: 'app-ideas-manager',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ideas-manager.html',
  styleUrls: ['./ideas-manager.css']
})
export class IdeasManagerComponent {
  @Input() isAdmin = false;

  activityTypes = ['סדנה', 'הרצאה', 'טיול', 'משחק', 'פעילות יצירה'];
  targetAudiences = ['ילדים', 'נוער', 'מבוגרים', 'משפחות'];
  statuses: IdeaStatus[] = ['ממתין לאישור', 'מאושר', 'נדחה'];

  ideas: Idea[] = [];

  form: FormGroup;
  editingId: string | null = null;
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      activityType: ['', Validators.required],
      audience: ['', Validators.required],
      duration: [null, [Validators.required, Validators.min(1)]],
      status: ['ממתין לאישור']
    });
  }

  private validateUnique(): string | null {
    const id = this.form.value.id;
    const name = this.form.value.name;

    const otherIdeas = this.ideas.filter(i => i.id !== this.editingId);

    if (otherIdeas.some(i => i.id === id)) {
      return 'מזהה הרעיון כבר קיים';
    }

    if (otherIdeas.some(i => i.name === name)) {
      return 'שם הרעיון כבר קיים';
    }

    return null;
  }

  onSubmit(): void {
    this.errorMessage = '';

    if (this.form.invalid) {
      this.errorMessage = 'כל השדות הם חובה, שם רעיון לפחות 3 תווים, משך זמן חיובי.';
      return;
    }

    const uniqueError = this.validateUnique();
    if (uniqueError) {
      this.errorMessage = uniqueError;
      return;
    }

    const idea: Idea = this.form.value;

    if (this.editingId) {
      this.ideas = this.ideas.map(i => i.id === this.editingId ? idea : i);
    } else {
      this.ideas = [...this.ideas, idea];
    }

    this.resetForm();
  }

  resetForm(): void {
    this.form.reset({
      id: '',
      name: '',
      activityType: '',
      audience: '',
      duration: null,
      status: 'ממתין לאישור'
    });
    this.editingId = null;
    this.errorMessage = '';
  }

  onEdit(idea: Idea): void {
    this.editingId = idea.id;
    this.form.setValue({
      id: idea.id,
      name: idea.name,
      activityType: idea.activityType,
      audience: idea.audience,
      duration: idea.duration,
      status: idea.status
    });
  }

  onDelete(id: string): void {
    this.ideas = this.ideas.filter(i => i.id !== id);
  }

  onStatusChange(id: string, newStatus: IdeaStatus): void {
    if (!this.isAdmin) return;

    this.ideas = this.ideas.map(i =>
      i.id === id ? { ...i, status: newStatus } : i
    );
  }
}
