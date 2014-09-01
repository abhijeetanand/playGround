//
//  ViewController.m
//  storeApp
//
//  Created by Zabiullah on 6/17/14.
//  Copyright (c) 2014 user. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)setSome:(id)sender
{
    NSUserDefaults *sample = [NSUserDefaults standardUserDefaults];
    [sample setValue:@"testValue" forKey:@"test key"];
}

- (IBAction)getSome:(id)sender
{
    NSLog(@"Value: %@",[[NSUserDefaults standardUserDefaults] valueForKey:@"test key"]);
}

@end
