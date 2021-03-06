import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TaskWithSubTasks} from '../../../../tasks/task.model';

@Component({
  selector: 'jira-issue-header',
  templateUrl: './jira-issue-header.component.html',
  styleUrls: ['./jira-issue-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JiraIssueHeaderComponent implements OnInit {
  @Input() public task: TaskWithSubTasks;

  constructor() {
  }

  ngOnInit() {
  }

}
