## Basic Usage

```typescript
form = new FormGroup({
    name: new FormControl(''),
});
```

```html
<atom-form-element [parent]="form" control="name">Name</atom-form-element>
```
