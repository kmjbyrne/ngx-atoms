import { TestBed } from '@angular/core/testing';

import { CoreHttpResourceService } from './core-http.service';

describe('CoreHttpService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CoreHttpResourceService<any> = TestBed.get(CoreHttpResourceService);
        expect(service).toBeTruthy();
    });
});
